import React from 'react';
import {Spinner, LockBody, Picture, ReleaseBody} from './styles/loading';

function Loading({src, ...restProps}){
    return(
        <Spinner>
            <LockBody></LockBody>
            <Picture src={`/images/user/${src}.png`} data-testid="loading-picture"/>
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
  };

export default Loading;