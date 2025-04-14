import type { InjectionKey } from 'vue'
import Feature from 'ol/Feature'

export const featureKey = Symbol('AppMapFeature') as InjectionKey<Feature>
