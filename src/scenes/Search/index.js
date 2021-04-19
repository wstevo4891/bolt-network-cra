import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from './mappings'

import Search from './Search'

export default connect(mapDispatchToProps, mapStateToProps)(Search)
