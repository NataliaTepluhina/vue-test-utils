const MOUNTING_OPTIONS = [
  'attachToDocument',
  'mocks',
  'slots',
  'localVue',
  'stubs',
  'context',
  'clone',
  'attrs',
  'listeners',
  'propsData'
]

export default function extractInstanceOptions (options) {
  const instanceOptions = { ...options }
  MOUNTING_OPTIONS.forEach(mountingOption => {
    delete instanceOptions[mountingOption]
  })
  return instanceOptions
}