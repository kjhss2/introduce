import React from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

// Actions
import { setDimension } from './actions/commonAction';

// Import
import { IS_MOBILE_WIDTH } from './config';

import './App.css';

function App() {

  const dispatch = useDispatch();

  // handleResize 함수를 debounce로 감싸고, 시간을 설정합니다 
  const handleResize = debounce(() => {
    dispatch(setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < IS_MOBILE_WIDTH
    }));
  }, 100);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div className="App">
      <header className="App-header">
        자기소개 페이지
      </header>
    </div>
  );
}

export default App;
