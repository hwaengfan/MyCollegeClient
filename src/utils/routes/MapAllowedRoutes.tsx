import { Route, Routes } from 'react-router-dom';
import ErrorState from '../../components/states/error/ErrorState';
import LoadingState from '../../components/states/loading/LoadingState';
import { useAppSelector } from '../../types/ReduxTypes';
import boardMemberRouteConfig from './configs/boardMemberRouteConfig';
import guestRouteConfig from './configs/guestRouteConfig';
import professorRouteConfig from './configs/professorRouteConfig';
import studentRouteConfig from './configs/studentRouteConfig';

const MapAllowedRoutes: React.FC = () => {
  const authentication = useAppSelector(state => state.authentication);
  let mapRoutes = null;

  switch (authentication.currentUserRole) {
    case 'student':
      mapRoutes = studentRouteConfig;
      break;
    case 'professor':
      mapRoutes = professorRouteConfig;
      break;
    case 'board-member':
      mapRoutes = boardMemberRouteConfig;
      break;
    default:
      mapRoutes = guestRouteConfig;
  }

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
