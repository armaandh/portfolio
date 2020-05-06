import { css } from '@emotion/core';

export const theme = {
  bgColor: '#F2F8FF',
}

export let cssElementsModifiers = (props) =>
  css `
  width: ${props.w ? props.w + 'px' : 'auto'};
  width: ${props.h ? props.h + 'px' : 'auto'};
  margin-top: ${props.mt ? props.mt + 'px' : 0};
  margin-bottom: ${props.mb ? props.mb + 'px' : 0};
  margin-left: ${props.ml ? props.ml + 'px' : 0};
  margin-right: ${props.mr ? props.mr + 'px' : 0};
  padding-top: ${props.pt ? props.pt + 'px' : 0};
  padding-bottom: ${props.pb ? props.pb + 'px' : 0};
  padding-left: ${props.pl ? props.pl + 'px' : 0};
  padding-right: ${props.pr ? props.pr + 'px' : 0};
`

export let cssShadowDefault = (props) => css`
  box-shadow: 0 2px 24px 1px rgba(209, 230, 255, 0.57);
`