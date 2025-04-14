import type { InjectionKey } from 'vue'
import VectorSource from 'ol/source/Vector'

export const vectorSourceKey = Symbol('AppMapVectorSource') as InjectionKey<VectorSource>
