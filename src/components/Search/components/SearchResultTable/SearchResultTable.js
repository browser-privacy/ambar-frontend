import React, { Component } from 'react'
import SearchResultRow from '../SearchResultRow'
import HintCard from '../HintCard'

import classes from './SearchResultTable.scss'

class SearchResultTable extends Component {
    render() {
        const {
            hits,
            searchQuery,
            fetching,
            performSearch,
            urls,
            showFilePreview,
            loadHighlight,
            performSearchBySource,
            performSearchByAuthor,
            performSearchByPathToFile,
            performSearchByQuery,
            toggleImagePreview } = this.props

        return (
            <div className='pageContainer'>
                {hits && hits.size > 0 && Array.from(hits.values()).map((hit, idx) =>
                    <SearchResultRow
                        key={hit.sha256}
                        hit={hit}
                        searchQuery={searchQuery}
                        loadHighlight={loadHighlight}
                        urls={urls}
                        performSearchBySource={performSearchBySource}
                        performSearchByAuthor={performSearchByAuthor}
                        performSearchByPathToFile={performSearchByPathToFile}
                        toggleImagePreview={toggleImagePreview}
                        showFilePreview={showFilePreview} />
                )}
                {(!hits || hits.size == 0)
                    && searchQuery != ''
                    && <HintCard
                        title='Nothing found'
                        description={<span>Your search - <i>{searchQuery}</i> - did not match any documents</span>}
                    />}
                {(!hits || hits.size == 0)
                    && searchQuery === ''
                    && <HintCard
                        title='Few tips for search'
                        description={<span>Just type your query in search input above and hit "Enter"</span>}
                    />}
            </div>
        )
    }
}

SearchResultTable.propTypes = {
    fetching: React.PropTypes.bool.isRequired,
    searchQuery: React.PropTypes.string.isRequired,
    loadHighlight: React.PropTypes.func.isRequired,
    performSearch: React.PropTypes.func.isRequired,
    performSearchByPathToFile: React.PropTypes.func.isRequired,
    urls: React.PropTypes.object.isRequired,
    showFilePreview: React.PropTypes.bool.isRequired,
    performSearchBySource: React.PropTypes.func.isRequired,
    performSearchByAuthor: React.PropTypes.func.isRequired,
    performSearchByQuery: React.PropTypes.func.isRequired,
    toggleImagePreview: React.PropTypes.func.isRequired
}

export default SearchResultTable
