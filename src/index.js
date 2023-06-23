import React from 'react';
import { createRoot } from 'react-dom/client';

//import HookApp from "./HookApp";
//import { FocusScreen } from './components/04-useRef/FocusScreen/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/LayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook/CallbackHook';

import { Padre } from './components/07-tarea-memo/Padre';

import './styles/index.css';

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(<Padre />);


