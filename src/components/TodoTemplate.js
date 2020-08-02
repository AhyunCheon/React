import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div` /*Todo Box template css*/
    width : 512px;
    height : 768px;
    
    position : relative;
    background : white;
    border-radius :16px;
    box-shadow 0 0 8px 0 rgba(0,0,0,0.04);    
    margin : 0 auto;
    margin-bottom: 32px;
    margin-top:64px;
    display : flex; /*flex : 수평요소(가로방향으로 배치, width만큼 차지)*/
    flex-direction: column;
`;

function TodoTemplate({children}){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
