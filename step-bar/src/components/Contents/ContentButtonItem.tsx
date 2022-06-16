import styled from 'styled-components';

interface ContentButtonItemProps {
  alignSelf?: string;
}

const ContentButtonItem = styled.div<ContentButtonItemProps>`
  // padding: 0 10px;
  align-self: ${(props) => props.alignSelf};
  display: ${(props) => (props.alignSelf ? null : 'flex')};
  justify-content: ${(props) => (props.alignSelf ? null : 'space-between')};
  width: ${(props) => (props.alignSelf ? null : '100%')};
`;

export default ContentButtonItem;
