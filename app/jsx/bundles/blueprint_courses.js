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

const data = ENV.BLUEPRINT_COURSES_DATA

require.ensure([], (require) => {
  const App = data.isMasterCourse
    ? require('../blueprint_courses/apps/BlueprintCourse')
    : require('../blueprint_courses/apps/ChildCourse')

  const wrapper = document.getElementById('wrapper')
  const root = document.createElement('div')
  root.className = 'blueprint__root'
  wrapper.appendChild(root)

  const app = new App(root, data, ENV.DEBUG_BLUEPRINT_COURSES)
  app.start()
})