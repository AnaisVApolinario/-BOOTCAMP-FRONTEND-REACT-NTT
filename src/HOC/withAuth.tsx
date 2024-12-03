import { ModuleRoutes } from "@/router/routes";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthHOC = (props: any) => {
    const token = sessionStorage.getItem("accessToken"); 

    if (!token) {
      return <Navigate to={ModuleRoutes.LOGIN} />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
