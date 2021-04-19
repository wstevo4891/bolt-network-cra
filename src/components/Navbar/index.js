import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from './mappings'

import Navbar from './Navbar'

export default connect(mapDispatchToProps, mapStateToProps)(Navbar)
