import {
  Routes, Route,
} from 'react-router-dom';
import { Home } from './Home';

import { Layout } from './Layout';
import { Section1 } from './Sections/Section1';
import { Section2 } from './Sections/Section2';
import { Section3 } from './Sections/Section3';
import { Section4 } from './Sections/Section4';
import { Section5 } from './Sections/Section5';
import { Section6 } from './Sections/Section6';
import { Section7 } from './Sections/Section7';



export const Router = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sekcija1" element={<Section1 />} />
            <Route path="/sekcija2" element={<Section2 />} />
            <Route path="/sekcija3" element={<Section3 />} />
            <Route path="/sekcija4" element={<Section4 />} />
            <Route path="/sekcija5" element={<Section5 />} />
            <Route path="/sekcija6" element={<Section6 />} />
            <Route path="/sekcija7" element={<Section7 />} />
        </Route>
    </Routes>
  );
};