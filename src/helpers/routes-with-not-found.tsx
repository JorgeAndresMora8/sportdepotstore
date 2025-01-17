import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      <Route path="*" element={<div>Route with not found</div>} />
      {children}
    </Routes>
  );
}

export default RoutesWithNotFound;
