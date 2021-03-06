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
import V1ContainerStateRunning from './V1ContainerStateRunning'
import V1ContainerStateTerminated from './V1ContainerStateTerminated'
import V1ContainerStateWaiting from './V1ContainerStateWaiting'

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 * @export
 * @interface V1ContainerState
 */
export default interface V1ContainerState extends KubeObject {
  /**
   *
   * @type {V1ContainerStateRunning}
   * @memberof V1ContainerState
   */
  running?: V1ContainerStateRunning

  /**
   *
   * @type {V1ContainerStateTerminated}
   * @memberof V1ContainerState
   */
  terminated?: V1ContainerStateTerminated

  /**
   *
   * @type {V1ContainerStateWaiting}
   * @memberof V1ContainerState
   */
  waiting?: V1ContainerStateWaiting
}
