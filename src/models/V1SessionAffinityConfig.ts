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
import V1ClientIPConfig from './V1ClientIPConfig'

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 * @export
 * @interface V1SessionAffinityConfig
 */
export default interface V1SessionAffinityConfig extends KubeObject {
  /**
   *
   * @type {V1ClientIPConfig}
   * @memberof V1SessionAffinityConfig
   */
  clientIP?: V1ClientIPConfig
}