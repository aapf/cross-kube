/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'
import V1KeyToPath from './V1KeyToPath'

/**
 * Adapts a ConfigMap into a projected volume.  The contents of the target ConfigMap\'s Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 * @export
 * @interface V1ConfigMapProjection
 */
export default interface V1ConfigMapProjection extends KubeObject {
  /**
   * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
   * @type {Array<V1KeyToPath>}
   * @memberof V1ConfigMapProjection
   */
  items?: Array<V1KeyToPath>

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof V1ConfigMapProjection
   */
  name?: string

  /**
   * Specify whether the ConfigMap or its keys must be defined
   * @type {boolean}
   * @memberof V1ConfigMapProjection
   */
  optional?: boolean
}
