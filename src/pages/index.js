import React from 'react'
import { Link } from 'gatsby'

import { IconGithub } from '../components/common/icons'
import { Image } from '../components/home'
import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'

const IndexPage = () => (
  <Layout className='home-page'>
    <Seo />
    Homepage
  </Layout>
)

export default IndexPage
