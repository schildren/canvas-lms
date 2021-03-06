/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import '@instructure/ui-themes/lib/canvas'
import React from 'react'
import { mount, shallow } from 'enzyme'
import ExternalFeedsTray from '../ExternalFeedsTray'

const defaultProps = () => ({
  atomFeedUrl: "www.test.com",
})

test('renders the ExternalFeedsTray component', () => {
  const tree = mount(<ExternalFeedsTray {...defaultProps()} />)
  expect(tree.exists()).toBe(true)
})

test('renders the external feeds link', () => {
  const tree = mount(<ExternalFeedsTray {...defaultProps()} />)
  const node = tree.find('Link')
  expect(node.text()).toBe('External feeds')
})

test('renders the RSS feed link', () => {
  const tree = shallow(<ExternalFeedsTray {...defaultProps()} />)
  expect(tree.find('#rss-feed-link Container').prop('children')).toMatch('RSS Feed')
})
