import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import ViewSelect from './ViewSelect'

export default connect(mapStateToProps)(ViewSelect)
