import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import GenreSlider from './GenreSlider'

export default connect(mapStateToProps)(GenreSlider)
