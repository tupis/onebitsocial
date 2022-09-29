import type { Config } from '@japa/runner'
import TestUtils from '@ioc:Adonis/Core/TestUtils'
import { assert, runFailedTests, specReporter, apiClient } from '@japa/preset-adonis'

export const plugins: Config['plugins'] = [assert(), runFailedTests(), apiClient()]

export const reporters: Config['reporters'] = [specReporter()]

export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
  setup: [() => TestUtils.ace().loadCommands()],
  teardown: [],
}

export const configureSuite: Config['configureSuite'] = (suite) => {
  if (suite.name === 'functional') {
    suite.setup(() => TestUtils.httpServer().start())
  }
}
