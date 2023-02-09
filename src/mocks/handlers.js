import { rest } from "msw";
import { API_URL } from "@env";

const uid = "6Iw0r8lNxmQ8MDt5hipTI4xrZNA2"

export const handlers = [
    rest.get(`${API_URL}/api/v1/users/${uid}`, (req, res, ctx) => {
       return res(
        ctx.status(200),
        ctx.json({
            "data": {
                "id": "171",
                "type": "user",
                "attributes": {
                    "profile": {
                        "first_name": "Test3",
                        "last_name": "User",
                        "email": "test3@user.com",
                        "uid": "6Iw0r8lNxmQ8MDt5hipTI4xrZNA2",
                        "role": "standard",
                        "activity_level": null,
                        "starting_pain_duration": null,
                        "starting_pain_score": 5,
                        "pace": "just_right",
                        "commitment": 5,
                        "gender": null,
                        "dob": null,
                        "phone": null
                    },
                    "onboard_status": 0,
                    "condensed_program": false,
                    "profile_status": 1,
                    "education_progress": {
                        "progress": 8,
                        "last_completed_date": null
                    },
                    "movement_progress": {
                        "progress": 2,
				        "last_completed_date": 1675737051648.594
                    },
                    "conversation": [
                        {
                            "id": 280,
                            "body": "Hi Test3, welcome to PainNavigator! My name is Marina and I’ll be supporting you in your program as your Wellness Coach. I’m looking forward to helping you get the most out of the program. Feel free to ask me any questions here. Let me know the best time to reach out to you for our first call.",
                            "date_time_value": 1674508423906.095,
                            "sender_id": 1,
                            "recipient_id": 171,
                            "status": "unread"
                        }
                    ],
                    "last_pain_journal_date": null,
                    "last_mood_journal_date": null,
                    "last_food_journal_date": null,
                    "mood_journals": [],
                    "pain_journals": [],
                    "pain_graph_data": {},
                    "food_journals": [],
                    "smart_goals": [
                        {
                            "id": 52,
                            "goal": "Test",
                            "steps": "Test",
                            "reward": "Test",
                            "end_date": null,
                            "user_id": 171,
                            "status": "active",
                            "date_time_value": 1675736581804.445,
                            "smart_goal_updates_count": null,
                            "created_at": "2023-02-07T02:23:01.804Z",
                            "updated_at": "2023-02-07T02:23:01.804Z"
                        }
                    ],
                    "active_goal_updates": null
                }
            }
        })
       )
    })
]