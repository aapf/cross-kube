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
import V1beta2RollingUpdateDeployment from './V1beta2RollingUpdateDeployment'

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 * @export
 * @interface V1beta2DeploymentStrategy
 */
export default interface V1beta2DeploymentStrategy extends KubeObject {
  /**
   *
   * @type {V1beta2RollingUpdateDeployment}
   * @memberof V1beta2DeploymentStrategy
   */
  rollingUpdate?: V1beta2RollingUpdateDeployment

  /**
   * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
   * @type {string}
   * @memberof V1beta2DeploymentStrategy
   */
  type?: string
}