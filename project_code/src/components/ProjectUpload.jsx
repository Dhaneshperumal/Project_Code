import { Button, Container, Grid, Paper, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AsideBar from './Asidebar';

const ProjectUpload = () => {
  const [projectName, setProjectName] = useState('');
  const [projectFile, setProjectFile] = useState(null);
  const [gitRepositoryUrl, setGitRepositoryUrl] = useState('');
  const [uploadType, setUploadType] = useState('file'); // Default to file upload
  const navigate = useNavigate();

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleFileChange = (e) => {
    setProjectFile(e.target.files[0]);
  };

  const handleGitRepositoryUrlChange = (e) => {
    setGitRepositoryUrl(e.target.value);
  };

  const handleUploadTypeChange = (e) => {
    setUploadType(e.target.value);
    // Clear previous input if the upload type changes
    if (e.target.value === 'file') {
      setProjectFile(null);
      setGitRepositoryUrl('');
    } else {
      setGitRepositoryUrl('');
      setProjectFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (projectName && (projectFile || gitRepositoryUrl)) {
      try {
        const formData = new FormData();
        formData.append('projectName', projectName);

        if (uploadType === 'file' && projectFile) {
          formData.append('projectFile', projectFile);
        } else if (uploadType === 'git' && gitRepositoryUrl) {
          formData.append('gitRepositoryUrl', gitRepositoryUrl);
        } else {
          alert('Please select a valid upload method.');
          return;
        }

        const token = localStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        if (!token) {
          alert('Authentication token is missing. Please log in again.');
          return;
        }

        const response = await axios.post('http://localhost:8080/api/projects', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });

        alert('Project Uploaded Successfully');
        navigate('/dashboard/junior-dashboard');
      } catch (error) {
        handleErrorResponse(error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleErrorResponse = (error) => {
    if (error.response) {
      console.error('Error response:', error.response.data);
      if (error.response.status === 403) {
        const errorMessage = error.response.data.message || 'Forbidden: You do not have permission to perform this action.';
        alert(`Error: ${errorMessage}`);
      } else {
        alert(`Error: ${error.response.data.message || 'Project upload failed. Please try again.'}`);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
      alert('No response from server. Please try again later.');
    } else {
      console.error('Error setting up request:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className='d-flex'>
      <AsideBar />
      <Container maxWidth="md">
        <Paper className="paper" elevation={3}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Project Name"
                  variant="outlined"
                  fullWidth
                  value={projectName}
                  onChange={handleProjectNameChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="upload-type-label">Upload Type</InputLabel>
                  <Select
                    labelId="upload-type-label"
                    id="upload-type-select"
                    value={uploadType}
                    label="Upload Type"
                    onChange={handleUploadTypeChange}
                  >
                    <MenuItem value="file">Upload File</MenuItem>
                    <MenuItem value="git">Git Repository</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {uploadType === 'file' && (
                <Grid item xs={12}>
                  <input type="file" onChange={handleFileChange} />
                </Grid>
              )}
              {uploadType === 'git' && (
                <Grid item xs={12}>
                  <TextField
                    label="Git Repository URL"
                    variant="outlined"
                    fullWidth
                    value={gitRepositoryUrl}
                    onChange={handleGitRepositoryUrlChange}
                    required
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Upload
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectUpload;