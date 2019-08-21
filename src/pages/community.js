import React from 'react'

import {
  IconGithub,
  IconGitter,
  IconStackOverflow,
  IconZenHub,
} from '../components/common/icons'
import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'
import { ZenhubImage } from '../components/community'

const CommunityPage = () => {
  return (
    <Layout className='page-community'>
      <Seo title='Community' />
      Community page
    </Layout>
  )
}

export default CommunityPage
