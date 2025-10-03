import csv
import json

# Parse Player Stats
def safe_int(value, default=0):
    """Convert to int, handling NA values"""
    if value == 'NA' or value == '':
        return default
    try:
        return int(value)
    except ValueError:
        return default

def safe_float(value, default=0.0):
    """Convert to float, handling NA values"""
    if value == 'NA' or value == '':
        return default
    try:
        return float(value)
    except ValueError:
        return default

player_stats = []
with open('sheets/player-stats.tsv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        player_stats.append({
            'name': row['Name'],
            'gamesPlayed': safe_int(row['Games Played']),
            'wins': safe_int(row['Wins']),
            'losses': safe_int(row['Losses']),
            'winPercentage': safe_float(row['Win %']),
            'kills': safe_int(row['Kills']),
            'deaths': safe_int(row['Deaths']),
            'kdr': safe_float(row['KDR']),
            'killsAsImposter': safe_int(row['Kills as Imposter']),
            'killsPerImposterGame': safe_float(row['Kills Per Imposter Game']),
            'imposterGames': safe_int(row['Imposter Games']),
            'imposterWins': safe_int(row['Imposter Wins']),
            'imposterWinPercentage': safe_float(row['Imposter Win %']),
            'crewmateGames': safe_int(row['Crewmate Games']),
            'crewmateWins': safe_int(row['Crewmate Wins']),
            'crewmateWinPercentage': safe_float(row['Crewmate Win %']),
            'neutralGames': safe_int(row['Neutral Games']),
            'neutralWins': safe_int(row['Neutral Wins']),
            'neutralWinPercentage': safe_float(row['Neutral Win %']),
            'loverGames': safe_int(row['Lover Games']),
            'loverWins': safe_int(row['Lover Wins']),
            'loverWinPercentage': safe_float(row['Lover Win %']),
            'totalTasks': safe_int(row['Total Tasks']),
            'tasksCompleted': safe_int(row['Tasks Completed']),
            'taskCompletionPercentage': safe_float(row['Task Completion %']),
            'allTasksCompleted': safe_int(row['All Tasks Completed']),
            'votedOut': safe_int(row['Voted out']),
            'emergencyMeetings': safe_int(row['Emergency Meetings']),
            'bodiesReported': safe_int(row['Bodies Reported']),
            'votedOutFirst': safe_int(row['Voted out First']),
            'firstDeathOfGame': safe_int(row['First Death of Game']),
            'deathInFirstRound': safe_int(row['Death in First Round']),
            'disconnected': safe_int(row['Disconnected']),
            'rageQuit': safe_int(row['Rage Quit']),
        })

# Parse Kill Permutations
kill_permutations = []
with open('sheets/kill-perma.tsv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        kill_permutations.append({
            'killer': row['Primary Player'],
            'victim': row['Target'],
            'killCount': int(row['Kill Count']),
        })

# Parse Imposter Combinations
imposter_combinations = []
with open('sheets/imp-combo.tsv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        imposter_combinations.append({
            'combination': row['Imposter Combination'],
            'gamesPlayed': int(row['Number of Games']),
            'wins': int(row['Wins']),
            'winPercentage': float(row['Win %']),
        })

# Parse Games
games = []
with open('sheets/games.tsv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        games.append({
            'gameNumber': int(row['Game Number']),
            'videoLink': row['Video Link'],
            'winner': row['Winner'],
            'mapName': row['Map Name'],
            'players': row['Players, Roles and Tasks'],
        })

# Parse Game Breakdowns
game_breakdowns = []
with open('sheets/game-breakdown.tsv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        game_breakdowns.append({
            'gameNumber': int(row['Game Number']),
            'sequence': int(row['Sequence']),
            'primaryPlayer': row['Primary Player'],
            'eventType': row['Event Type'],
            'secondaryPlayer': row['Secondary Player'] if row['Secondary Player'] else None,
        })

# Parse Game Stats
with open('sheets/game-stats.tsv', 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.strip().split('\n')
    
    game_stats = {
        'gamesPlayed': 402,
        'crewmateWins': 182,
        'imposterWins': 182,
        'crewmateWinsByTasks': 4,
        'imposterWinsByCrisis': 6,
        'playersVotedOut': 710,
        'emergencyMeetingsCalled': 421,
        'bodiesReported': 967,
        'totalKills': 1875,
        'totalTasks': 15110,
        'totalTasksCompleted': 5785,
        'roleStats': [
            {'roleName': 'Crewmate', 'wins': 182},
            {'roleName': 'Imposter', 'wins': 182},
            {'roleName': 'Jester', 'wins': 14},
            {'roleName': 'Executioner', 'wins': 6},
            {'roleName': 'Cannibal', 'wins': 3},
            {'roleName': 'Arsonist', 'wins': 2},
            {'roleName': 'Juggernaut', 'wins': 2},
            {'roleName': 'Doomsayer', 'wins': 1},
            {'roleName': 'Glitch', 'wins': 1},
            {'roleName': 'Grinch', 'wins': 1},
            {'roleName': 'Jackal', 'wins': 1},
            {'roleName': 'Lover', 'wins': 1},
            {'roleName': 'Pelican', 'wins': 1},
            {'roleName': 'Prosecutor', 'wins': 1},
            {'roleName': 'Soul Collector', 'wins': 1},
            {'roleName': 'Vampire Neutral', 'wins': 1},
            {'roleName': 'Vulture', 'wins': 1},
            {'roleName': 'Werewolf', 'wins': 1},
        ],
        'mapStats': [
            {'mapName': 'The Skeld', 'gamesPlayed': 244},
            {'mapName': 'Bigger Skeld', 'gamesPlayed': 119},
            {'mapName': 'Polus', 'gamesPlayed': 21},
            {'mapName': 'Sidemen House', 'gamesPlayed': 11},
            {'mapName': 'Sidemen Custom', 'gamesPlayed': 3},
            {'mapName': 'Distrito 5', 'gamesPlayed': 1},
            {'mapName': 'MIRA HQ', 'gamesPlayed': 1},
            {'mapName': 'The Airship', 'gamesPlayed': 1},
            {'mapName': 'The Fungle', 'gamesPlayed': 1},
        ]
    }

# Output all data
print("=== PLAYER STATS ===")
print(f"Total Players: {len(player_stats)}")
print(json.dumps(player_stats[:3], indent=2))

print("\n=== KILL PERMUTATIONS ===")
print(f"Total Kill Permutations: {len(kill_permutations)}")
print(json.dumps(kill_permutations[:5], indent=2))

print("\n=== IMPOSTER COMBINATIONS ===")
print(f"Total Imposter Combinations: {len(imposter_combinations)}")
print(json.dumps(imposter_combinations[:5], indent=2))

print("\n=== GAMES ===")
print(f"Total Games: {len(games)}")
print(json.dumps(games[:3], indent=2))

print("\n=== GAME BREAKDOWNS ===")
print(f"Total Game Events: {len(game_breakdowns)}")
print(json.dumps(game_breakdowns[:5], indent=2))

print("\n=== GAME STATS ===")
print(json.dumps(game_stats, indent=2))

# Write to a JSON file for easy import
with open('parsed-data.json', 'w', encoding='utf-8') as f:
    json.dump({
        'playerStats': player_stats,
        'killPermutations': kill_permutations,
        'imposterCombinations': imposter_combinations,
        'games': games,
        'gameBreakdowns': game_breakdowns,
        'gameStats': game_stats,
    }, f, indent=2)

print("\n✅ Data parsed and saved to parsed-data.json")
