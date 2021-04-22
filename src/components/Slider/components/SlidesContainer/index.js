import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import SlidesContainer from './SlidesContainer'

export default connect(mapStateToProps)(SlidesContainer)
