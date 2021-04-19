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

/**
 * Describe a container image
 * @export
 * @interface V1ContainerImage
 */
export default interface V1ContainerImage extends KubeObject {
  /**
   * Names by which this image is known. e.g. [\"k8s.gcr.io/hyperkube:v1.0.7\", \"dockerhub.io/google_containers/hyperkube:v1.0.7\"]
   * @type {Array<string>}
   * @memberof V1ContainerImage
   */
  names: Array<string>

  /**
   * The size of the image in bytes.
   * @type {number}
   * @memberof V1ContainerImage
   */
  sizeBytes?: number
}
