// // import React from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { 
// //   Users, 
// //   FileCode, 
// //   GitPullRequest, 
// //   Bug, 
// //   CheckCircle, 
// //   AlertCircle,
// //   Upload,
// //   FileText
// // } from 'lucide-react';

// // Junior Developer Dashboard
// // export const JuniorDashboard = () => {
// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-2xl font-bold">Junior Developer Dashboard</h1>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Pending Reviews
// //             </CardTitle>
// //             <GitPullRequest className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">3</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Issues Found
// //             </CardTitle>
// //             <Bug className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">12</div>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Recent Uploads</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             {['Project A', 'Project B', 'Project C'].map((project) => (
// //               <div key={project} className="flex items-center justify-between">
// //                 <div className="flex items-center space-x-2">
// //                   <FileCode className="h-4 w-4" />
// //                   <span>{project}</span>
// //                 </div>
// //                 <span className="text-sm text-gray-500">2 days ago</span>
// //               </div>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// };

// // Senior Developer Dashboard
// // export const SeniorDashboard = () => {
// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-2xl font-bold">Senior Developer Dashboard</h1>
      
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Pending Reviews
// //             </CardTitle>
// //             <FileText className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">8</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Completed Reviews
// //             </CardTitle>
// //             <CheckCircle className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">24</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Critical Issues
// //             </CardTitle>
// //             <AlertCircle className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">5</div>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Review Queue</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             {[
// //               { project: 'Project X', developer: 'John Doe' },
// //               { project: 'Project Y', developer: 'Jane Smith' },
// //               { project: 'Project Z', developer: 'Bob Johnson' }
// //             ].map((item) => (
// //               <div key={item.project} className="flex items-center justify-between">
// //                 <div className="flex items-center space-x-2">
// //                   <FileCode className="h-4 w-4" />
// //                   <span>{item.project}</span>
// //                 </div>
// //                 <span className="text-sm text-gray-500">{item.developer}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // Admin Dashboard
// // export const AdminDashboard = () => {
// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Total Users
// //             </CardTitle>
// //             <Users className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">45</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Active Projects
// //             </CardTitle>
// //             <FileCode className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">12</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Reviews Today
// //             </CardTitle>
// //             <CheckCircle className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">8</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //             <CardTitle className="text-sm font-medium">
// //               Critical Issues
// //             </CardTitle>
// //             <AlertCircle className="h-4 w-4 text-muted-foreground" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-bold">3</div>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <Card>
// //           <CardHeader>
// //             <CardTitle>Recent Users</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-4">
// //               {[
// //                 { name: 'John Doe', role: 'Senior Developer' },
// //                 { name: 'Jane Smith', role: 'Junior Developer' },
// //                 { name: 'Bob Johnson', role: 'Senior Developer' }
// //               ].map((user) => (
// //                 <div key={user.name} className="flex items-center justify-between">
// //                   <div className="flex items-center space-x-2">
// //                     <User className="h-4 w-4" />
// //                     <span>{user.name}</span>
// //                   </div>
// //                   <span className="text-sm text-gray-500">{user.role}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader>
// //             <CardTitle>System Status</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-4">
// //               <div className="flex items-center justify-between">
// //                 <span>API Status</span>
// //                 <span className="text-green-500">Operational</span>
// //               </div>
// //               <div className="flex items-center justify-between">
// //                 <span>Database Status</span>
// //                 <span className="text-green-500">Operational</span>
// //               </div>
// //               <div className="flex items-center justify-between">
// //                 <span>Review Queue</span>
// //                 <span className="text-yellow-500">High Load</span>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };