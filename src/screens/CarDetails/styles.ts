import styled from "styled-components/native";

import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    margin: ${getStatusBarHeight() + RFValue(24)}px 12px 12px 12px;
    
`;

export const Header = styled.View``;