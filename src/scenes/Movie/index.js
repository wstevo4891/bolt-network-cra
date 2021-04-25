import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import Movie from './Movie'

export default connect(mapStateToProps)(Movie)
