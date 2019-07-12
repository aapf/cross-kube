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
import V1RollingUpdateDeployment from './V1RollingUpdateDeployment'

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 * @export
 * @interface V1DeploymentStrategy
 */
export default interface V1DeploymentStrategy extends KubeObject {
  /**
   *
   * @type {V1RollingUpdateDeployment}
   * @memberof V1DeploymentStrategy
   */
  rollingUpdate?: V1RollingUpdateDeployment

  /**
   * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
   * @type {string}
   * @memberof V1DeploymentStrategy
   */
  type?: string
}