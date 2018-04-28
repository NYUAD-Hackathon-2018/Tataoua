import React from 'react'
import Link from 'next/link'
import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {

  static async getInitialProps({req, query}) {
    let props = await super.getInitialProps({req})
    props.action = query.action || null
    props.type = query.type || null
    props.service = query.service || null
    return props
  }

  render() {
    return (
      <Layout {...this.props} navmenu={false}>
        <div className="text-center mb-5">
          <h1 className="display-4 mt-5 mb-2">Link not valid</h1>
          <p className="lead">This sign in link is no longer valid.</p>
          <p className="lead"><Link href="/auth"><a>Get a new sign in link</a></Link></p>
        </div>
      </Layout>
    )
  }
}
