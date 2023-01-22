import React, { useEffect, useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
export default () => {
  const { push, query } = useRouter()
  const { subject } = query
  const [content, setContent] = useState(null)
  useEffect(() => {
    APIFuncs.getContent(subject ? subject : 'about-us')
      .then(response => {
        if (response) {
          setContent(response)
        }
      })
      .catch(error => {})
  }, [])
  return (
    <div>
      {content ? (
        <div className="content_container">
          <div className="content_card">
            <div className="content_title">
              <h3>{content.name}</h3>
            </div>
            <div className="content_text">
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          </div>
        </div>
      ) : (
        <div id="content">
          <div className="loading is-double is-center" />
        </div>
      )}
      <style jsx>{`
        .content_card {
          max-width: 1024px;
          margin: 0 auto 60px auto;
          padding-top: 48px;
          background-color: #fff;
          border: 1px solid #e6e6e6;
        }
        h3 {
          display: block;
          font-size: 1.17em;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
        }
        .content_title {
          text-align: center;
          line-height: 23px;
          color: #2d2d2d;
        }
        .content_text {
          padding-right: 48px;
          padding-left: 48px;
          font-size: 14px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}
