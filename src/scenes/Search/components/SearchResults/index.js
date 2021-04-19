import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import SearchResults from './SearchResults'

export default connect(mapStateToProps)(SearchResults)
