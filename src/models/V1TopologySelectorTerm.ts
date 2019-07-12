// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'
import V1TopologySelectorLabelRequirement from './V1TopologySelectorLabelRequirement'

/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 * @export
 * @interface V1TopologySelectorTerm
 */
export default interface V1TopologySelectorTerm extends KubeObject {
  /**
   * A list of topology selector requirements by labels.
   * @type {Array<V1TopologySelectorLabelRequirement>}
   * @memberof V1TopologySelectorTerm
   */
  matchLabelExpressions?: Array<V1TopologySelectorLabelRequirement>
}