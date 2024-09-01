import React from 'react';
import {Container, Input, Button, Text, Break} from './styles/opt-form';

function OptForm({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps}></Input>
}

OptForm.Break = function OptFormBreak({...restProps}){
    return <Break {...restProps}></Break> 
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return <Button {...restProps}>{children} <img src='/images/icons/chevron-right.png' alt='Try now'></img></Button> 
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}
export default OptForm;