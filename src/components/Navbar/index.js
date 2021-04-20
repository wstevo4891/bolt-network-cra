import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import Navbar from './Navbar'

export default connect(mapStateToProps)(Navbar)
