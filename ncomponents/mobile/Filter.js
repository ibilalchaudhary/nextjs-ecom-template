// @ts-nocheck
/* eslint-disable indent */
import React, {useState, useEffect} from 'react';
import Router, {useRouter} from 'next/router';
import isEmpty from 'lodash/isEmpty';
import useOptions from '@components/useOptions';
import {APIFuncs} from '@utilts/APIs';

const Filter = ({
  filterVisible,
  setFilterVisible,
  setLoading,
  variant,
  variants,
}) => {
  const [optionsVisible, setOptionsVisible] = useOptions();
  const [filterSizes, setFilterSizes] = useState([]);
  const [filterPrice, setFilterPrice] = useState([0, 0]);

  const {query, pathname} = useRouter();

  const {
slug, childSlug, sort, vSlug, price, sizes,
} = query;

  const priceList = [
    {title: 'Under Rs 1,500', start: 0, end: 1500},
    {title: 'Rs 1,500 to Rs 2,500', start: 1500, end: 2500},
    {title: 'Rs 2,500 to Rs 5,000', start: 2500, end: 5000},
    {title: 'Above Rs 5,000', start: 5000, end: 1000000},
  ];
  useEffect(() => {
    APIFuncs.getFilters('', childSlug || slug).then((Res) => {
      if (Res) {
        const {
sizes, price, brands, features,
} = Res;
        setFilterSizes(sizes);
        setFilterPrice(price);
      }
    });
  }, []);
  const priceName = priceList.find(
    (found) => `${found.start},${found.end}` === price,
  );

  const categorie = slug === vSlug
      ? variant
      : variant.children.find((found) => found.slug === slug) || {};

  const subCategorie = slug === vSlug
      ? {}
      : categorie.children.find((found) => found.slug === childSlug) || {};

  const resetFilter = (category) => {
    setLoading(true);
    if (categorie) setOptionsVisible(category, false);
    setFilterVisible(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    clearTimeout();
  };

  return (
    <div id="refine">
      <div className={`refine ${filterVisible ? 'is-visible' : ''}`}>
        <div className="refine-header-wrapper">
          <div className="refine-header">
            <div className="refine-header-title">Refine</div>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setFilterVisible(false);
              }}
              className="refine-header-close">
              <i className="icon-close" />
            </a>
            <div className="refine-header-actions">
              <a
                href={`${pathname
                  .replace('[vSlug]', vSlug)
                  .replace('[slug]', slug)
                  .replace('[childSlug]', childSlug)}`}
                onClick={(e) => {
                  e.preventDefault();
                  Router.push(
                    `${pathname
                      .replace('[vSlug]', vSlug)
                      .replace('[slug]', slug)
                      .replace('[childSlug]', childSlug)}`,
                  );
                  resetFilter();
                }}
                className="refine-header-action refine-header-reset">
                Reset
              </a>
            </div>
          </div>
        </div>
        <div className="filtering-head"> Filter By </div>
        <div className="refine-filtering">
          <div className="filtering">
            <ul className="filtering-list">
              <div className="filtering-list-option">
                <li onClick={() => setOptionsVisible('category', true)}>
                  <h2 className="option-title">Category</h2>
                  <div className="options-category-title">
                    <div
                      className={`option-selected options-categories-selected ${
                        !categorie ? 'active' : ''
                      }`}>
                      {!isEmpty(variant) ? variant.name : ''}
                      {categorie ? (
                        <i className="icon-back option-breadcrumbs-arrow" />
                      ) : null}
                    </div>
                    {!isEmpty(categorie) ? (
                      <div
                        className={`option-selected options-categories-selected ${
                          !subCategorie ? 'active' : ''
                        }`}>
                        {categorie.name}
                        {subCategorie ? (
                          <i className="icon-back option-breadcrumbs-arrow" />
                        ) : null}
                      </div>
                    ) : null}
                    {subCategorie ? (
                      <div className="option-selected options-categories-selected active">
                        {subCategorie.name}
                      </div>
                    ) : null}
                  </div>
                </li>
                <div
                  className={`options-list ${
                    optionsVisible.category ? 'is-visible' : ''
                  }`}>
                  <div className="options-list-header-wrapper">
                    <div className="options-list-header">
                      <span
                        className="icon-back"
                        onClick={() => setOptionsVisible('category', false)}
                      />
                      <h2 className="options-list-title">Category</h2>
                    </div>
                  </div>
                  <ul className="options-list-select">
                    <div className="category-tabs">
                      {!isEmpty(variants)
                        ? variants.map(({name, slug: slugX, children}) => (
                          <div
                            key={slugX}
                            className="category-tab has-children">
                            <a
                              href=""
                              onClick={(e) => {
                                  e.preventDefault();
                                  setOptionsVisible('activeVariant', slugX);
                                }}
                              className={`category-tab-header ${
                                  optionsVisible.activeVariant
                                    ? optionsVisible.activeVariant === slugX
                                      ? 'active'
                                      : ''
                                    : variant.slug === slugX
                                    ? 'active'
                                    : ''
                                }`}>
                              {name}
                            </a>
                            <div
                              className={`category-tab-content ${
                                  optionsVisible.activeVariant
                                    ? optionsVisible.activeVariant === slugX
                                      ? 'is-visible'
                                      : ''
                                    : variant.slug === slugX
                                    ? 'is-visible'
                                    : ''
                                }`}>
                              <div className="options-list-select-category">
                                <li
                                  onClick={() => {
                                      Router.push(`/${slugX}`);
                                      resetFilter('category');
                                    }}
                                  className={`options-list-option options-list-option-category ${
                                      !categorie && variant.slug === slugX
                                        ? 'is-selected'
                                        : ''
                                    }`}>
                                  <div>{`all ${name}`}</div>
                                  <i
                                    className={`icon-done option-icon-done ${
                                        !categorie && variant.slug === slugX
                                          ? 'is-visible'
                                          : ''
                                      }`}
                                    />
                                </li>
                              </div>
                              {children.length
                                  ? children.map(
                                      ({
                                        name: nameX,
                                        slug: slugXX,
                                        children: childrenX,
                                      }) => {
                                        const lName = nameX.toLowerCase();
                                        const properName = lName.charAt(0).toUpperCase()
                                          + lName.slice(1);
                                        return (
                                          <div key={slugXX}>
                                            <li
                                              onClick={() => {
                                                setOptionsVisible(
                                                  slugX + slugXX,
                                                  !optionsVisible[
                                                    slugX + slugXX
                                                  ],
                                                );
                                              }}
                                              className="options-list-option options-list-option-category is-parent">
                                              <div>{properName}</div>
                                              <i
                                                className={`icon-arrow ${
                                                  optionsVisible[slugX + slugXX]
                                                    ? 'is-category-expanded'
                                                    : ''
                                                }`}
                                              />
                                            </li>
                                            <div
                                              className={`options-sub-categories ${
                                                optionsVisible[slugX + slugXX]
                                                  ? 'is-visible'
                                                  : ''
                                              }`}>
                                              <div className="options-list-select-category">
                                                <li
                                                  onClick={() => {
                                                    Router.push(
                                                      `/${slugX}/${slugXX}`,
                                                    );
                                                    resetFilter('category');
                                                  }}
                                                  className={`options-list-option options-list-option-category ${
                                                    !childSlug
                                                    && slug === slugXX
                                                      ? 'is-selected'
                                                      : ''
                                                  }`}>
                                                  <div>{`all ${properName}`}</div>
                                                  <i
                                                    className={`icon-done option-icon-done ${
                                                      !childSlug
                                                      && slug === slugXX
                                                        ? 'is-visible'
                                                        : ''
                                                    }`}
                                                  />
                                                </li>
                                                {childrenX.length
                                                  ? childrenX.map(
                                                      ({
                                                        name: nameXX,
                                                        slug: slugXXX,
                                                      }) => {
                                                        const lNameX = nameXX.toLowerCase();
                                                        const properNameX = lNameX
                                                            .charAt(0)
                                                            .toUpperCase()
                                                          + lName.slice(1);
                                                        return (
                                                          <li
                                                            onClick={() => {
                                                              Router.push(
                                                                `/${slugX}/${slugXX}/${slugXXX}`,
                                                              );
                                                              resetFilter(
                                                                'category',
                                                              );
                                                            }}
                                                            key={slugXXX}
                                                            className={`options-list-option options-list-option-category ${
                                                              childSlug
                                                              === slugXXX
                                                                ? 'is-selected'
                                                                : ''
                                                            }`}>
                                                            <div>
                                                              {properNameX}
                                                            </div>
                                                            <i
                                                              className={`icon-done option-icon-done ${
                                                                childSlug
                                                                === slugXXX
                                                                  ? 'is-selected'
                                                                  : ''
                                                              }`}
                                                            />
                                                          </li>
                                                        );
                                                      },
                                                    )
                                                  : null}
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      },
                                    )
                                  : null}
                            </div>
                          </div>
                          ))
                        : null}
                    </div>
                  </ul>
                </div>
              </div>
              <div className="filtering-list-option">
                <li
                  onClick={() => setOptionsVisible('size', true)}
                  className="option-list-item">
                  <h2 className="option-title">Size</h2>
                  <span className="option-selected options-categories-selected active">
                    {sizes || 'Any'}
                  </span>
                </li>
                <div
                  className={`options-list ${
                    optionsVisible.size ? 'is-visible' : ''
                  }`}>
                  <div className="options-list-header-wrapper">
                    <div className="options-list-header">
                      <span
                        className="icon-back"
                        onClick={() => setOptionsVisible('size', false)}
                      />
                      <h2 className="options-list-title">Size</h2>
                    </div>
                  </div>
                  <ul className="options-list-select">
                    <div>
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          const newQuery = Object.assign(query);
                          delete newQuery.vSlug;
                          delete newQuery.slug;
                          delete newQuery.childSlug;
                          delete newQuery.sizes;
                          Router.push({
                            pathname: pathname
                              .replace('[vSlug]', vSlug)
                              .replace('[slug]', slug)
                              .replace('[childSlug]', childSlug),
                            query: {...newQuery, page: 1},
                          });
                          resetFilter('size');
                        }}
                        className={`options-list-option ${
                          !sizes ? 'is-selected' : ''
                        }`}>
                        <span dir="ltr" className="options-list-name">
                          Any
                        </span>
                        <i
                          className={`icon-done option-icon-done ${
                            !sizes ? 'is-visible' : ''
                          }`}
                        />
                      </li>
                      {filterSizes.map(({_id, name}, index) => (
                        <li
                          key={`size${ index}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const newQuery = Object.assign(query);
                            delete newQuery.vSlug;
                            delete newQuery.slug;
                            delete newQuery.childSlug;
                            Router.push({
                              pathname: pathname
                                .replace('[vSlug]', vSlug)
                                .replace('[slug]', slug)
                                .replace('[childSlug]', childSlug),
                              query: {...newQuery, sizes: _id, page: 1},
                            });

                            // const FindAt = sizesArr.findIndex(
                            //   item => name === item
                            // )
                            // const copyofSizesArr = sizesArr
                            // if (FindAt > -1) {
                            //   copyofSizesArr.splice(FindAt, 1)
                            // }
                            // FindAt === -1
                            //   ? Router.push({
                            //       pathname: childSlug
                            //         ? '/' + vSlug + '/' + slug + '/' + childSlug
                            //         : '/' + vSlug + '/' + slug,
                            //       query: {
                            //         ...newQuery,
                            //         sizes:
                            //           sizesArr.length !== 0
                            //             ? `${sizesArr},${name}`
                            //             : [name],
                            //         page: 1,
                            //       },
                            //     })
                            //   : Router.push({
                            //       pathname: childSlug
                            //         ? '/' + vSlug + '/' + slug + '/' + childSlug
                            //         : '/' + vSlug + '/' + slug,
                            //       query:
                            //         copyofSizesArr.length !== 0
                            //           ? {
                            //               ...newQuery,
                            //               sizes: copyofSizesArr + '',
                            //               page: 1,
                            //             }
                            //           : (delete newQuery['sizes'],
                            //             {
                            //               ...newQuery,
                            //               page: 1,
                            //             }),
                            //     })
                            resetFilter('size');
                          }}
                          className={`options-list-option ${
                            sizes === _id ? 'is-selected' : ''
                          }`}>
                          <span dir="ltr" className="options-list-name">
                            {name}
                          </span>
                          <i
                            className={`icon-done option-icon-done ${
                              sizes === _id ? 'is-visible' : ''
                            }`}
                          />
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
              <div className="filtering-list-option">
                <li
                  onClick={() => setOptionsVisible('price', true)}
                  className="option-list-item">
                  <h2 className="option-title">Price</h2>
                  <span className="option-selected options-categories-selected active">
                    {priceName ? priceName.title : 'Any'}
                  </span>
                </li>
                <div
                  className={`options-list ${
                    optionsVisible.price ? 'is-visible' : ''
                  }`}>
                  <div className="options-list-header-wrapper">
                    <div className="options-list-header">
                      <span
                        className="icon-back"
                        onClick={() => setOptionsVisible('price', false)}
                      />
                      <h2 className="options-list-title">Price</h2>
                    </div>
                  </div>
                  <ul className="options-list-select">
                    <div>
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          const newQuery = Object.assign(query);
                          delete newQuery.vSlug;
                          delete newQuery.slug;
                          delete newQuery.childSlug;
                          Router.push({
                            pathname: pathname
                              .replace('[vSlug]', vSlug)
                              .replace('[slug]', slug)
                              .replace('[childSlug]', childSlug),
                            query: {...newQuery, price: '', page: 1},
                          });
                          resetFilter('price');
                        }}
                        className={`options-list-option ${
                          !price ? 'is-selected' : ''
                        }`}>
                        <span dir="ltr" className="options-list-name">
                          Any
                        </span>
                        <i
                          className={`icon-done option-icon-done ${
                            !price ? 'is-visible' : ''
                          }`}
                        />
                      </li>
                      {priceList.map(({title: titleX, start, end}) => {
                        const selected = price === `${start}%2C${end}`
                          || price === `${start},${end}`;
                        return (
                          <li
                            key={start}
                            onClick={(e) => {
                              e.preventDefault();
                              const newQuery = Object.assign(query);
                              delete newQuery.vSlug;
                              delete newQuery.slug;
                              delete newQuery.childSlug;
                              Router.push({
                                pathname: pathname
                                  .replace('[vSlug]', vSlug)
                                  .replace('[slug]', slug)
                                  .replace('[childSlug]', childSlug),
                                query: {
                                  ...newQuery,
                                  price: `${start},${end}`,
                                  page: 1,
                                },
                              });
                              resetFilter('size');
                            }}
                            className={`options-list-option ${
                              selected ? 'is-selected' : ''
                            }`}>
                            <span dir="ltr" className="options-list-name">
                              {titleX}
                            </span>
                            <i
                              className={`icon-done option-icon-done ${
                                selected ? 'is-visible' : ''
                              }`}
                            />
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
