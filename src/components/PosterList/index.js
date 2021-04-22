import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import PosterList from './PosterList'

export default connect(mapStateToProps)(PosterList)
