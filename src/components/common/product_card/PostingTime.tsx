import React from 'react';
import styled from 'styled-components';

interface StyledPostingTimeProps {
  fontSize?: string;
  margin?: string;
}

interface PostingTimeProps extends StyledPostingTimeProps {
  date: string;
  convertDate: string;
}

const StyledPostingTime = styled.span<StyledPostingTimeProps>`
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
`;

StyledPostingTime.defaultProps = {
  fontSize: '0.8rem',
};

const PostingTime = ({
  date,
  fontSize,
  margin,
  convertDate,
}: PostingTimeProps): React.ReactNode => {
  const krCurrentDate = new Date();
  const postDate = convertDate;

  const secondDiff =
    (Number(krCurrentDate.valueOf()) - Number(postDate.valueOf())) / 1000;

  const timeObj = {
    now: 5,
    second: 30,
    min: 90,
    '10min': 600,
    hour: 3600,
    other: 5400,
  };

  const outputText = () => {
    if (secondDiff <= timeObj.now) return '지금';

    if (secondDiff <= timeObj.second) return '몇 초 전';

    if (secondDiff <= timeObj.min) return '1분 전';

    if (secondDiff <= timeObj['10min']) return '몇 분 전';

    if (secondDiff > timeObj['10min'] && secondDiff <= timeObj.hour)
      return '몇십 분 전';
    if (secondDiff > timeObj.hour && secondDiff < timeObj.other)
      return '1시간 전';
    if (secondDiff > timeObj.other) return date;
  };

  return (
    <StyledPostingTime fontSize={fontSize} margin={margin}>
      {outputText()}
    </StyledPostingTime>
  );
};

export default PostingTime;
