import { connect } from 'react-redux'

import Results from './Results'

import { mapStateToProps } from './mappings'

export default connect(mapStateToProps)(Results)
