import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from './mappings'

import Genre from './Genre'

export default connect(mapStateToProps, mapDispatchToProps)(Genre)
