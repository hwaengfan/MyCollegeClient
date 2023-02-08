import { Route, Routes } from 'react-router-dom';
import ErrorState from '../../pages/error/ErrorState';
import LoadingState from '../../pages/loading/LoadingState';
import { useAppSelector } from '../../types/ReduxTypes';
import BoardMemberRouteConfig from './configs/BoardMemberRouteConfig';
import CourseRouteConfig from './configs/CourseRouteConfig';
import GuestRouteConfig from './configs/GuestRouteConfig';
import ProfessorRouteConfig from './configs/ProfessorRouteConfig';
import StudentRouteConfig from './configs/StudentRouteConfig';

const MapAllowedRoutes: React.FC = () => {
  const authentication = useAppSelector(state => state.authentication);
  let mapRoutes = null;

  switch (authentication.currentUserRole) {
    case 'student':
      mapRoutes = StudentRouteConfig;
      break;
    case 'professor':
      mapRoutes = ProfessorRouteConfig;
      break;
    case 'board-member':
      mapRoutes = BoardMemberRouteConfig;
      break;
    default:
      mapRoutes = GuestRouteConfig;
  }

  mapRoutes = CourseRouteConfig;

  return (
    <Routes>
      {mapRoutes.map(config => {
        return (
          <Route
            key={config.title}
            path={config.path}
            element={<config.component />}
          />
        );
      })}
      <Route path="*" element={<ErrorState />} />

      {/* Testing Routes */}
      <Route path="/error" element={<ErrorState />} />
      <Route path="/loading" element={<LoadingState />} />
    </Routes>
  );
};

export default MapAllowedRoutes;
