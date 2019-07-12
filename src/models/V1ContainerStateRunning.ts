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

/**
 * ContainerStateRunning is a running state of a container.
 * @export
 * @interface V1ContainerStateRunning
 */
export default interface V1ContainerStateRunning extends KubeObject {
  /**
   * Time at which the container was last (re-)started
   * @type {Date}
   * @memberof V1ContainerStateRunning
   */
  startedAt?: Date
}