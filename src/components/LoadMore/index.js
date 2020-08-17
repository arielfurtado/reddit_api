import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const LoadMore = ({ loadMore, loading }) => (
 <S.Button onClick={loadMore} isLoading={loading}>
  Carregar mais
 </S.Button>
);
LoadMore.propTypes = {
 loadMore: PropTypes.func.isRequired,
 loading: PropTypes.string.isRequired,
};
export default LoadMore;
