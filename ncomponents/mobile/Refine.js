// @ts-nocheck
import React, {Component} from 'react';
import Router, {useRouter} from 'next/router';

const Refine = (props) => {
  const {refineVisible, setRefineVisible, setLoading} = props;
  const {query, pathname, push} = useRouter();

  const {
    vSlug, slug, childSlug, sort,
  } = query;

  const sortList = [
    {title: 'Best Selling', value: '-popularity'},
    {title: 'Price, Low to High', value: 'variants.price'},
    {title: 'Price, High to Low', value: '-variants.price'},
    {title: 'Date, Old to New', value: 'createdAt'},
    {title: 'Date, New to Old', value: '-createdAt'},
    { title: 'Featured', value: 'popularity' },

  ];

  const sortName = sortList.find(
    (found) => found.value === (sort || '-createdAt'),
  );

  return (
    <div id="refine">
      <div
        onClick={() => {
          // e.preventDefault();
          setRefineVisible(false);
        }}
        className={`refine-sort ${refineVisible ? 'is-visible-sort' : ''}`}>
        <div className={`sort-bar ${refineVisible ? 'is-visible-sort' : ''}`}>
          <div className="refine-header-wrapper">
            <div className="refine-header">
              <div className="refine-header-title">Refine</div>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setRefineVisible(false);
                }}
                className="refine-header-close">
                <i className="icon-close" />
              </a>
            </div>
          </div>
          <div className="refine-sorting">
            <div className="sorting">
              <div className="sorting-head filtering-head"> Sort By </div>
              <ul className="sorting-list" style={{display: 'block'}}>
                {sortList.map(({title, value, icon}) => (
                  <li
                    className={`sorting-list-option ${sortName.value === value ? 'is-active' : ''
                      }`}
                    key={value}>
                    <a
                      style={{color: '#222', textDecoration: 'none'}}
                      href={`${pathname
                        .replace('[vSlug]', vSlug)
                        .replace('[slug]', slug)
                        .replace('[childSlug]', childSlug)}?sort=${value}&page=1`}
                      onClick={() => {
                        // e.preventDefault();
                        setLoading(true);
                        const newQuery = Object.assign(query);
                        delete newQuery.vSlug;
                        delete newQuery.slug;
                        delete newQuery.childSlug;
                        push({
                          pathname: pathname
                            .replace('[vSlug]', vSlug)
                            .replace('[slug]', slug)
                            .replace('[childSlug]', childSlug),
                          query: {...newQuery, sort: value, page: 1},
                        });
                      }}>
                      <i className={`sorting-icons icon-${icon}`} />
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refine;
