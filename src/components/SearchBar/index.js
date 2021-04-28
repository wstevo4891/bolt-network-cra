import { connect } from 'react-redux'

import { noop } from 'utils'

import { mapDispatchToProps } from './mappings'

import SearchBar from './SearchBar'

export default connect(noop, mapDispatchToProps)(SearchBar)
