import { Footer, Navbar } from "./components";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { About, Auth, Companies, CompanyProfile, FindJob, JobDetails, SubmittedDataPage, UploadJob, UserProfile } from "./pages";
import { useSelector } from "react-redux";
function App() {
  const user = {}
function Layout(){
  const {user} = useSelector((state)=> state.user);
  const location = useLocation();
  return user ? (
    <Outlet/>):( <Navigate to="user-auth" state={{from: location}} replace/>
    );
}
  return (
    <>
      <main>
        <Navbar/>
      <Routes>
        <Route element={<Layout/>}>
        <Route
            path='/'
            element={<Navigate to='/tern-jobs' replace={true} />}
          />
          <Route path='/tern-jobs' element={<FindJob />} />
        <Route path="/companies" element={<Companies/>}/>
        <Route 
        path={user?.user?.accountType === "seeker"
         ? "/user-profile"
          : "/user-profile/:id"} 
          element={<UserProfile/>}/>
        <Route path={"/company-profile"} element={<CompanyProfile/>}/>
        <Route path={"/company-profile/:id"} element={<CompanyProfile/>}/>
        <Route path={"/upload-job"} element={<UploadJob/>}/>
        <Route path={"/job-detail/:id"} element={<JobDetails/>}/>
        </Route>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/user-auth" element={<Auth/>}/>
        <Route path='/employe' element={<SubmittedDataPage/>} />

      </Routes>
      {user &&  <Footer/>}
      </main>
   
    </>
  )
}

export default App
